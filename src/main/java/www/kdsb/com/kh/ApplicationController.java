package www.kdsb.com.kh;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class ApplicationController {
	
	@GetMapping("/index")
	public String goHome() {
		return "index";
	}
	@GetMapping("/layout")
	public String getLayout() {
		return "layout";
	}
	
	
	
}
