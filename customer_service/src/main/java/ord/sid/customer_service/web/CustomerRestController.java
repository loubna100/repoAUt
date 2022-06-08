package ord.sid.customer_service.web;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class CustomerRestController {

	
	   @GetMapping(path = "/profile")
	    public void profile(Principal principal){

	       System.out.println("principal"+principal);
	    }
}
