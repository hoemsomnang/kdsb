package www.kdsb.com.kh.configuration;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
public class ApplicationConfiguration  extends WebMvcConfigurerAdapter {

	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(
        		"/resources/**",
        		"/css/**",
        		"/fonts/**",
        		"/images/**",
        		"/js/**",
        		"/webfonts/**"
        		).addResourceLocations(
        		"classpath:/META-INF/resources/",
        		"classpath:/static/css/",
        		"classpath:/static/fonts/",
        		"classpath:/static/images/",
        		"classpath:/static/js/",
        		"classpath:/static/webfonts/"
        	   );
          
    }

}
