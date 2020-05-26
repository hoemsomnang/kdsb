package www.kdsb.com.kh.services;

import java.util.Date;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender javaMailSender;
	public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }
	public void sendMail(String fromEmail,String toEmail, String subject, String message) throws Exception {
   
		MimeMessage mimeMessage=javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper=new MimeMessageHelper(mimeMessage,true);
		try {
			mimeMessageHelper.setFrom(fromEmail);
			mimeMessageHelper.setTo(toEmail);
			mimeMessageHelper.setSubject(subject);
			mimeMessageHelper.setText(message,true);
			mimeMessageHelper.setSentDate(new Date());
	        javaMailSender.send(mimeMessage);
		}catch (MailException	 e) {
			
		}
    }
}
