function construcCrew(crewObj) {
    
    if (crewObj.dizziness === true) {
        crewObj.levelOfHydrated += 0.1 * crewObj.weight * crewObj.experience;
        crewObj.dizziness = false;

        return crewObj;
    } else {
        return crewObj;
    }
    
    
}

console.log(construcCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));