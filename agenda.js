function addNote() {
    var noteInput = document.getElementById("note");
    var noteText = noteInput.value.trim();
    
    if (noteText !== "") {
        var noteList = document.getElementById("noteList");
        var li = document.createElement("li");
        li.textContent = noteText;
        noteList.appendChild(li);
        noteInput.value = ""; // Limpar o campo de entrada após adicionar a nota
    }
}