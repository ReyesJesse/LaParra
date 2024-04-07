<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $reservationDate = $_POST['reservation-date'];
    $reservationTime = $_POST['reservation-time'];
    $partySize = $_POST['party-size'];

    // Create email content
    $to = "jesse.reyes.andrade@gmail.com"; // Change this to your email address
    $subject = "Reservation Details";
    $message = "Reservation Date: $reservationDate\n";
    $message .= "Reservation Time: $reservationTime\n";
    $message .= "Party Size: $partySize\n";

    // Send email
    $headers = "jesse.reyes.andrade@gmail.com"; // Change this to your restaurant's email address
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your reservation. We have received your details.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}

?>
