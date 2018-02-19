// Brian Kan CS4220

class Groups {

    constructor(groups = []) {  // DONE
        this.groups = groups
    }

    addGroup({ name = "Group Name", leader = "Leader Name", members = [] }) { // DONE
        this.groups.push({ name, leader, members })
    }

    removeGroup(groupName) {  // DONE
        const found = this.groups.findIndex(item => {
            return item.name.toLowerCase() === groupName.toLowerCase()
        })

        this.groups.splice(found, 1)
    }
    addMember(groupName, memberName) { // DONE
        const found = this.groups.find(item => {
            return item.name.toLowerCase() === groupName.toLowerCase()
        })

        if (found)
            found["members"].push(memberName)
    }
    removeMember(groupName, memberName) {  // DONE
        const found = this.groups.find(item => {
            return item.name.toLowerCase() === groupName.toLowerCase()
        })

        const foundMember = found["members"].findIndex(item => {
            return item.toLowerCase() === memberName.toLowerCase()
        })

        if (found)
            found["members"].splice(foundMember, 1)
    }
    print() {  // DONE
        this.groups.forEach(item => {
            let memberItem = `${item.members}`
            console.log(`\n${item.name} \nLeader: ${item.leader} \n${memberItem.split(",").join(" | ")} `)
        })
    }

}

function printTesting(functionName) {
    console.log("\n---------------------------")
    console.log("Testing " + functionName + " Function")
    console.log("---------------------------")
}


// Task 1

const groups = new Groups()

printTesting("addGroup")
groups.addGroup({
    name: 'Justice League',
    leader: 'Wonder Woman',
    members: ['Batman', 'Superman', 'Spiderman']
})
groups.addGroup({
    name: 'Avengers',
    leader: 'Iron Man',
    members: ['Hulk', 'Thor', 'Captain America']
})
groups.print()

printTesting("addMember")
groups.addMember('Justice League', 'Aqua Man')
groups.print()


printTesting("removeGroup")
groups.removeGroup('avengers')
groups.print()


printTesting("removeMember")
groups.removeMember('Justice League', 'spiderMan')
groups.print()

// Task 2

printTesting("displayName")
const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

function displayName({ first, last }) {
    console.log(`\n${first} ${last}`)
}

displayName(person)

// Task 3
printTesting("combineName")
function combineName(person, name, key) {
    let combinedObject = person;
    let combined = ""
    name.forEach(item => {
        combined += combinedObject[item] + " "
        delete combinedObject[item]
    })
    combinedObject[key] = combined.trim()
    return combinedObject
}

console.log(combineName(person, ['first', 'last'], 'name'))


// Task 4
const people = [[ // Array of Arrays of Objects [[{Object},{Object}...],[{Object},...]]
    {
        key: 'name',
        value: 'Elon Musk'
    },
    {
        key: 'twitter',
        value: '@elonmusk'
    }, {
        key: 'company',
        value: 'Space X'
    }],
[
    {
        key: 'name',
        value: 'Tim Cook'
    }, {
        key: 'twitter',
        value: '@tim_cook'
    }, {
        key: 'company',
        value: 'Apple'
    }
]
]

printTesting("createObject")
function createObject(people) {
    let count = 1;
    let newObject = {}
    people.forEach(array => { // Outer loop - Returns Array of Arrays
        let personObject = {}
        array.forEach(object => { // Inner Loop Returns Object
            personObject[object.key]=object.value
        })
        newObject[count] = personObject
        count++;
    })

    return newObject
}
console.log(createObject(people))


