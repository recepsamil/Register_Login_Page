
document.getElementById('kayitButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('kayitForm').style.display = 'block';
    document.getElementById('girisForm').style.display = 'none';
});

document.getElementById('girisButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('girisForm').style.display = 'block';
    document.getElementById('kayitForm').style.display = 'none';
});
