// Defining interfaces
interface MajorCredits {
    credits: number;
    // Add unique identify to the interface
    brand: "MajorCredits";
}

interface MinorCredits {
    credits: number;
    // Add a brand property to uniquely identify the interface
    brand: "MinorCredits";
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}
