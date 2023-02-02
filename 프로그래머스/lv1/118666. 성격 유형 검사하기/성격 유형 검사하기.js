function solution(survey, choices) {
    const personality = {};
    const types = ["RT", "CF", "JM", "AN"];
    
    types.forEach((type) => {
        type.split("").forEach((t) => personality[t] = 0)
    })
    
    choices.forEach((choice, idx) => {
        const [disagree, agree] = survey[idx];
        personality[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    })
    
    return types.map(([a, b]) => personality[a] >= personality[b] ? a : b).join("");
}