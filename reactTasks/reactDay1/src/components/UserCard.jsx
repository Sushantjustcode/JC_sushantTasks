function UserCard({ name, age, role, cardNum }) {
    return (
        <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-md transition duration-300 hover:shadow-lg">
            <div className="mb-4 rounded-xl border-2 border-red-400 bg-red-50 p-2 text-center font-semibold text-red-600 transition duration-300 hover:border-dashed">
                Card No. {cardNum}
            </div>

            <h2 className="mb-3 text-2xl font-bold text-gray-900">
                {name}
            </h2>

            <p className="mb-2 text-gray-600">
                <span className="font-semibold text-gray-800">Age:</span> {age}
            </p>

            <p className="text-gray-600">
                <span className="font-semibold text-gray-800">Role:</span> {role}
            </p>
        </div>
    );
}

export default UserCard;
