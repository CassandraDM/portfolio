document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Replace './assets/CV.pdf' with the correct path to your CV file
    var pdfUrl = "./assets/CV.pdf";

    // Create a link element
    var link = document.createElement("a");

    // Set the href attribute to the PDF file path
    link.href = pdfUrl;

    // Specify that the link should trigger a download
    link.setAttribute("download", "CV_cassandra_dm.pdf");

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link element to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  });
