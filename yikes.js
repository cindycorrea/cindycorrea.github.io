function lastUpdate() {
    var lastModifiedDate = document.lastModified;
    document.write(lastModifiedDate);
}

function currentYear() {
    var dateTimeObject = new Date();
    var fullYear = dateTimeObject.getFullYear();
    document.write(fullYear);
}