import { useEffect, useState } from "react";
import Select from "react-select";
import Creatable from "react-select/creatable";


const Multipleselect = () => {
  const [fromData, setData] = useState({
    skills: [],
    state: "",
    stat2: "",

    multiselect: [],
  });

  const skills = [
    {
      id: 1,
      name: "JavaScript",
      level: "Advanced",
    },
    {
      id: 2,
      name: "React",
      level: "Advanced",
    },
    {
      id: 3,
      name: "Node.js",
      level: "Intermediate",
    },
    {
      id: 4,
      name: "HTML",
      level: "Advanced",
    },
    {
      id: 5,
      name: "CSS",
      level: "Advanced",
    },
  ];

  const options = [
    { value: "3242349849238439284", label: "Chocolate" },
    { value: "Strawberry", label: "Strawberry" },
    { value: 3, label: "Vanilla" },
  ];

  console.log(options[1].value);

  const handelsubmit = () => {
    console.log(fromData);

    let payload = {
      ...fromData,
      stat2: fromData.stat2.value,
      multiselect: fromData.multiselect.map((res) => res.value),
    };

    console.log(payload, "payload");
  };

  useEffect(() => {
    let data = {
      multiselect: [1, 2],
      skills: [1],
      stat2: 1,
      state: "2",
    };
    console.log(data, "data");
    const stateselect = options.find((res) => res.value == data.stat2);
    const stateselectmulti = options.filter((res) =>
      data.multiselect.includes(res.value),
    );

    setData({
      skills: data.skills,
      multiselect: stateselectmulti,
      state: data.state,
      stat2: stateselect,
    });
  }, []);
  return (
    <>
      <h1>skills </h1>
      <label>Skills</label>
      <label>
        <input
          type="checkbox"
          checked={fromData.skills.length === skills.length}
          onChange={(e) => {
            if (e.target.checked) {
              setData({
                ...fromData,
                skills: skills.map((skill) => skill.id),
              });
            } else {
              setData({
                ...fromData,
                skills: [],
              });
            }
          }}
        />
        Select All
      </label>
      <br></br>
      {skills.map((skill) => {
        return (
          <>
            <input
              type="checkbox"
              value={fromData.skills}
              checked={fromData.skills.includes(skill.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setData({
                    ...fromData,
                    skills: [...fromData.skills, skill.id],
                  });
                } else {
                  setData({
                    ...fromData,
                    skills: fromData.skills.filter((res) => res !== skill.id),
                  });
                }
              }}
            />
            <label>{skill.name},</label>
          </>
        );
      })}
      ---------
      <select
        value={fromData.state}
        onChange={(e) => setData({ ...fromData, state: e.target.value })}
      >
        <option>Choose one</option>
        {skills.map((skill) => {
          return <option value={skill.id}>{skill.name}</option>;
        })}
      </select>
      <br></br>
      -----
      <Select
        options={options}
        value={fromData.stat2}
        onChange={(select) => {
          setData({
            ...fromData,
            stat2: select,
          });
        }}
      />
      -------------
      <label>Multiple select</label>
      <Creatable
        isMulti
        value={fromData.multiselect}
        options={options}
        onChange={(select) => {
          setData({
            ...fromData,
            multiselect: select,
          });
        }}
      />
      <button onClick={handelsubmit}>Submit</button>
    </>
  );
};
export default Multipleselect;
