<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['message']);
    $privacy = isset($_POST['privacy']) ? true : false;

    if (!$privacy) {
        echo "Моля, потвърдете съгласието си.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Настройки за SMTP (ABV)
        $mail->isSMTP();
        $mail->Host = 'smtp.abv.bg';
        $mail->SMTPAuth = true;
        $mail->Username = 'softerm@abv.bg';    // твоя имейл
       $mail->Password = 'ТУК_ТВОЯТА_ПАРОЛА';// парола за имейла
        $mail->SMTPSecure = 'ssl';            // ABV работи със SSL
        $mail->Port = 465;

        // Получател – можеш да пращаш на себе си или на друг имейл
        $mail->setFrom('softerm@abv.bg', 'Softerm сайт');
        $mail->addAddress('softerm@abv.bg', 'Softerm');

        // Съдържание
        $mail->isHTML(true);
        $mail->Subject = 'Ново запитване от сайта';
        $mail->Body = "<b>Име:</b> {$name}<br>
                       <b>Телефон:</b> {$phone}<br>
                       <b>Съобщение:</b><br>{$message}";

        $mail->send();
        echo "Запитването е изпратено успешно!";
    } catch (Exception $e) {
        echo "Грешка при изпращане: {$mail->ErrorInfo}";
    }
}
?>