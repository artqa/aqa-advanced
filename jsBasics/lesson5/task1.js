const averageGrade = 81;

if (averageGrade < 60) {
    console.log("Unsatisfactory");
} else if (averageGrade >=60 && averageGrade <=70) {
    console.log("Satisfactory");
} else if (averageGrade >=71 && averageGrade <=80) {
    console.log("Good");
} else if (averageGrade >=81 && averageGrade <=90) {
    console.log("Very good");
} else if (averageGrade >=91 && averageGrade <=100) {
    console.log("Perfectly");
} else {
    console.log("Invalid grade! Please check it and try again.");
}

if (averageGrade < 60) {
    console.log('Unsatisfactory')
} else if (averageGrade <= 70) {
    console.log('Satisfactory')
} else if (averageGrade <= 80) {
    console.log('Good')
} else if (averageGrade <= 90) {
    console.log('Very good')
} else if (averageGrade <= 100) {
    console.log('Perfectly')
} else {
    console.log('Invalid grade! Please check it and try again.')
}