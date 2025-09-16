if (Array.isArray(obj)) {
        return obj
            .map(compactObject)               // recursively clean nested structures
            .filter(Boolean);                 // remove falsy values
    } else if (obj !== null && typeof obj === "object") {
        let newObj = {};
        for (let key in obj) {
            let value = compactObject(obj[key]);
            if (Boolean(value)) {             // keep only truthy values
                newObj[key] = value;
            }
        }
        return newObj;
    }
    return obj; 
