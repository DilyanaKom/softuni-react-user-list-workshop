export const formatDate = (dateString) => {
    console.log(dateString)
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {year: "numeric", month: "long", day: "numeric"});
}

