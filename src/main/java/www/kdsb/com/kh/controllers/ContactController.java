package www.kdsb.com.kh.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;


import www.kdsb.com.kh.models.Contact;
import www.kdsb.com.kh.services.EmailService;


@Controller
public class ContactController {
	 // @Autowired
	 // private EmailService emailService;
	/*
	 * @RequestMapping("/send") public String send() throws AddressException,
	 * MessagingException, IOException{
	 * emailService.sendMail("somnanghoemrupp@gmail.com", "Hi", "Ho ho ho");
	 * emailService.sendPreConfiguredMail("Ho ho ho"); return "success";
	 * 
	 * 
	 * }
	 */
	
	@Autowired
	JavaMailSender javaMailServer;
	
	
	
	@GetMapping("/")
	public String contact(Model model) {
		model.addAttribute("contact",new Contact());
		return "index";
	}
	
	@Autowired private EmailService emailService;
	
	@PostMapping("/sendEmail")
	public String sendEmail(@ModelAttribute Contact contact) {
		   
		 try {
			  String firstname=contact.getFirstname();
			  String lastname=contact.getLastname();
			  String fromEmail=contact.getEmail();
			  String messages="Sender Name:" +firstname +" "+lastname;
			         messages+="<br>Email: "  +contact.getEmail();
			         messages+="<br>" +contact.getMessage();
			 // System.out.println(firstname+" "+lastname+""+email+""+messages);
			  emailService.sendMail(fromEmail,"hoemsomnangruppa4@gmail.com", "Messa",messages);
			
		 }catch(Exception e) {
			 
		 }
		 return "redirect:/"; 
	}
	
	
	


	
	
}
