<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST['name'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $message = trim($_POST['message'] ?? '');
    $privacy = isset($_POST['privacy']);

    if (empty($name) || empty($phone) || empty($message)) {
        exit("Моля, попълнете всички полета.");
    }

    if (!$privacy) {
        exit("Моля, потвърдете съгласието си.");
    }

    if (!preg_match('/^[0-9+ ]+$/', $phone)) {
        exit("Невалиден телефон.");
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host ='mail.vik-remonti123.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'office@vik-remonti123.com';
        $mail->Password = 'ТУК_СЛОЖИ_ПАРОЛА';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom('office@vik-remonti123.com', 'VIK сайт');
        $mail->addAddress('office@vik-remonti123.com');

        $mail->isHTML(true);
        $mail->Subject = 'Ново запитване от сайта';
        $mail->Body = "
            <b>Име:</b> {$name}<br>
            <b>Телефон:</b> {$phone}<br>
            <b>Съобщение:</b><br>{$message}
        ";

        $mail->send();
        header("Location: thanks.html");
exit;

    } catch (Exception $e) {
        echo "Грешка: {$mail->ErrorInfo}";
    }
}