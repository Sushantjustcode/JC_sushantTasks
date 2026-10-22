console.log("THIRD TASK-----------------------" + "\n");

function ThirdPartyAPI() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            const groupCompanies = data.filter((user) => user.company.name.includes("Group"));
            if (groupCompanies.length > 0) {
                console.log("Companies found with 'Group' in their name:");
                console.log(groupCompanies);
            } else {
                console.log("No companies found with 'Group' in their name");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}
ThirdPartyAPI();
