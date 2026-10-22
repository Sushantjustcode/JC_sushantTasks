import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AmbientCanvas({ ambiance = 'daylight' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // ─── Scene setup ───────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    currentMount.appendChild(renderer.domElement);

    const isCandle = ambiance === 'candlelight';

    // ─── Create a soft glowing sprite texture ─────────────────────
    const makeSprite = (r, g, b, inner = 0.9, outer = 0.0) => {
      const c = document.createElement('canvas');
      c.width = 64; c.height = 64;
      const ctx = c.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0,   `rgba(${r},${g},${b},${inner})`);
      grad.addColorStop(0.4, `rgba(${r},${g},${b},${inner * 0.4})`);
      grad.addColorStop(1,   `rgba(${r},${g},${b},${outer})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    };

    // ─── DAYLIGHT: golden sunbeam motes + cool white dust ─────────
    const createDaylightParticles = () => {
      const groups = [];

      // Layer 1: Large golden sunbeam motes (slowly drifting)
      const moteTex = makeSprite(255, 215, 100, 0.7);
      const moteGeo = new THREE.BufferGeometry();
      const moteCount = 60;
      const motePos = new Float32Array(moteCount * 3);
      const moteVel = new Float32Array(moteCount * 3);
      const motePhase = new Float32Array(moteCount);
      for (let i = 0; i < moteCount; i++) {
        motePos[i*3]   = (Math.random() - 0.5) * 100;
        motePos[i*3+1] = (Math.random() - 0.5) * 70;
        motePos[i*3+2] = (Math.random() - 0.5) * 40;
        moteVel[i*3]   = (Math.random() - 0.5) * 0.008;
        moteVel[i*3+1] = Math.random() * 0.012 + 0.003;
        moteVel[i*3+2] = (Math.random() - 0.5) * 0.006;
        motePhase[i]   = Math.random() * Math.PI * 2;
      }
      moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
      const moteMat = new THREE.PointsMaterial({
        size: 2.2, map: moteTex, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.55
      });
      groups.push({ pts: new THREE.Points(moteGeo, moteMat), pos: motePos, vel: moteVel, phase: motePhase, count: moteCount, type: 'mote' });

      // Layer 2: Tiny crisp dust flecks
      const dustTex = makeSprite(255, 245, 220, 0.95);
      const dustGeo = new THREE.BufferGeometry();
      const dustCount = 120;
      const dustPos = new Float32Array(dustCount * 3);
      const dustVel = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount; i++) {
        dustPos[i*3]   = (Math.random() - 0.5) * 90;
        dustPos[i*3+1] = (Math.random() - 0.5) * 65;
        dustPos[i*3+2] = (Math.random() - 0.5) * 35;
        dustVel[i*3]   = (Math.random() - 0.5) * 0.004;
        dustVel[i*3+1] = Math.random() * 0.007 + 0.001;
        dustVel[i*3+2] = 0;
      }
      dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
      const dustMat = new THREE.PointsMaterial({
        size: 0.7, map: dustTex, transparent: true,
        blending: THREE.NormalBlending, depthWrite: false, opacity: 0.35
      });
      groups.push({ pts: new THREE.Points(dustGeo, dustMat), pos: dustPos, vel: dustVel, count: dustCount, type: 'dust' });

      // Layer 3: Wide, slow, very soft sunbeam streaks (a few big blobs)
      const beamTex = makeSprite(255, 230, 140, 0.25);
      const beamGeo = new THREE.BufferGeometry();
      const beamCount = 8;
      const beamPos = new Float32Array(beamCount * 3);
      const beamVel = new Float32Array(beamCount * 3);
      for (let i = 0; i < beamCount; i++) {
        beamPos[i*3]   = (Math.random() - 0.5) * 70;
        beamPos[i*3+1] = (Math.random() - 0.5) * 50;
        beamPos[i*3+2] = (Math.random() - 0.5) * 20;
        beamVel[i*3+1] = Math.random() * 0.005 + 0.001;
      }
      beamGeo.setAttribute('position', new THREE.BufferAttribute(beamPos, 3));
      const beamMat = new THREE.PointsMaterial({
        size: 12, map: beamTex, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.4
      });
      groups.push({ pts: new THREE.Points(beamGeo, beamMat), pos: beamPos, vel: beamVel, count: beamCount, type: 'beam' });

      return groups;
    };

    // ─── CANDLELIGHT: orange embers + smoke + deep warm flickers ──
    const createCandlelightParticles = () => {
      const groups = [];

      // Layer 1: Hot ember cores (bright orange-white)
      const emberTex = makeSprite(255, 180, 50, 1.0);
      const emberGeo = new THREE.BufferGeometry();
      const emberCount = 50;
      const emberPos = new Float32Array(emberCount * 3);
      const emberVel = new Float32Array(emberCount * 3);
      const emberPhase = new Float32Array(emberCount);
      const emberLife = new Float32Array(emberCount);
      for (let i = 0; i < emberCount; i++) {
        emberPos[i*3]   = (Math.random() - 0.5) * 70;
        emberPos[i*3+1] = (Math.random() - 0.5) * 50 - 5;
        emberPos[i*3+2] = (Math.random() - 0.5) * 30;
        emberVel[i*3]   = (Math.random() - 0.5) * 0.025;
        emberVel[i*3+1] = Math.random() * 0.03 + 0.015;
        emberVel[i*3+2] = (Math.random() - 0.5) * 0.015;
        emberPhase[i]   = Math.random() * Math.PI * 2;
        emberLife[i]    = Math.random();
      }
      emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
      const emberMat = new THREE.PointsMaterial({
        size: 1.4, map: emberTex, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.9
      });
      groups.push({ pts: new THREE.Points(emberGeo, emberMat), pos: emberPos, vel: emberVel, phase: emberPhase, life: emberLife, count: emberCount, type: 'ember' });

      // Layer 2: Warm amber glow clouds
      const glowTex = makeSprite(245, 130, 30, 0.55);
      const glowGeo = new THREE.BufferGeometry();
      const glowCount = 35;
      const glowPos = new Float32Array(glowCount * 3);
      const glowVel = new Float32Array(glowCount * 3);
      const glowPhase = new Float32Array(glowCount);
      for (let i = 0; i < glowCount; i++) {
        glowPos[i*3]   = (Math.random() - 0.5) * 80;
        glowPos[i*3+1] = (Math.random() - 0.5) * 55;
        glowPos[i*3+2] = (Math.random() - 0.5) * 25;
        glowVel[i*3]   = (Math.random() - 0.5) * 0.012;
        glowVel[i*3+1] = Math.random() * 0.018 + 0.006;
        glowPhase[i]   = Math.random() * Math.PI * 2;
      }
      glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPos, 3));
      const glowMat = new THREE.PointsMaterial({
        size: 6.5, map: glowTex, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.6
      });
      groups.push({ pts: new THREE.Points(glowGeo, glowMat), pos: glowPos, vel: glowVel, phase: glowPhase, count: glowCount, type: 'glow' });

      // Layer 3: Deep red smoke wisps (barely visible, atmospheric)
      const smokeTex = makeSprite(180, 60, 10, 0.3);
      const smokeGeo = new THREE.BufferGeometry();
      const smokeCount = 20;
      const smokePos = new Float32Array(smokeCount * 3);
      const smokeVel = new Float32Array(smokeCount * 3);
      for (let i = 0; i < smokeCount; i++) {
        smokePos[i*3]   = (Math.random() - 0.5) * 60;
        smokePos[i*3+1] = (Math.random() - 0.5) * 45;
        smokePos[i*3+2] = (Math.random() - 0.5) * 20;
        smokeVel[i*3]   = (Math.random() - 0.5) * 0.007;
        smokeVel[i*3+1] = Math.random() * 0.009 + 0.003;
      }
      smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3));
      const smokeMat = new THREE.PointsMaterial({
        size: 14, map: smokeTex, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.25
      });
      groups.push({ pts: new THREE.Points(smokeGeo, smokeMat), pos: smokePos, vel: smokeVel, count: smokeCount, type: 'smoke' });

      return groups;
    };

    const particleGroups = isCandle ? createCandlelightParticles() : createDaylightParticles();
    particleGroups.forEach(g => scene.add(g.pts));

    // ─── Mouse parallax ───────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 3;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ─── Animation loop ───────────────────────────────────────────
    let rafId;
    let t = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.016;

      particleGroups.forEach(g => {
        const { pos, vel, count, type, phase, life } = g;

        for (let i = 0; i < count; i++) {
          pos[i*3]   += vel[i*3];
          pos[i*3+1] += vel[i*3+1];
          pos[i*3+2] += vel[i*3+2];

          // Sinusoidal drift for motes / embers
          if (phase) {
            pos[i*3] += Math.sin(t * 0.5 + phase[i]) * 0.008;
          }

          // Reset particles that float off screen
          const bound = type === 'beam' ? 35 : type === 'smoke' ? 28 : 32;
          if (pos[i*3+1] > bound) {
            pos[i*3+1] = -bound;
            pos[i*3]   = (Math.random() - 0.5) * (type === 'dust' ? 90 : 80);
            if (life) life[i] = 0;
          }
        }
        g.pts.geometry.attributes.position.needsUpdate = true;

        // Candlelight flicker: oscillate opacity
        if (isCandle && (type === 'ember' || type === 'glow')) {
          const flicker = 0.85 + Math.sin(t * 3.5 + (type === 'ember' ? 0 : 1.2)) * 0.15;
          g.pts.material.opacity = (type === 'ember' ? 0.9 : 0.6) * flicker;
        }

        // Daylight pulse: gentle breathing effect
        if (!isCandle && type === 'mote') {
          g.pts.material.opacity = 0.45 + Math.sin(t * 0.6) * 0.12;
        }
      });

      // Camera follows mouse with lag
      camera.position.x += (mouseX - camera.position.x) * 0.025;
      camera.position.y += (-mouseY - camera.position.y) * 0.025;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (currentMount?.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement);
      particleGroups.forEach(g => {
        g.pts.geometry.dispose();
        g.pts.material.map?.dispose();
        g.pts.material.dispose();
      });
      renderer.dispose();
    };
  }, [ambiance]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ transition: 'opacity 1s ease' }}
      aria-hidden="true"
    />
  );
}
