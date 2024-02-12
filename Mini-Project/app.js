document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("resumeForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        var formData = new FormData(form);

        // Send form data to PHP for processing
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "process.php", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displayPreview(response);
            }
        };
        xhr.send(formData);
    });

    function displayPreview(data) {
        var previewDiv = document.getElementById("preview");
        // Generate HTML content based on form data
        var previewHTML = "<h2>Preview</h2>";
        // Build preview HTML using data
        // For example: previewHTML += "<p>" + data.name + "</p>";
        previewDiv.innerHTML = previewHTML;
    }
});
