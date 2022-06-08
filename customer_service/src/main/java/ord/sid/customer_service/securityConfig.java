package ord.sid.customer_service;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import ord.sid.customer_service.filters.JwtAutorizationFilter;





@Configuration
@EnableWebSecurity
public class securityConfig extends WebSecurityConfigurerAdapter {

	
	   @Override
	    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	    	 

	    }
	    
	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	        http.csrf().disable();
	      //  http.formLogin();
	        http.headers().frameOptions().disable();
	       http.authorizeRequests().anyRequest().permitAll();
	     
	        //http.addFilterBefore(new JwtAutorizationFilter(), UsernamePasswordAuthenticationFilter.class);
	  
	    }
	    
	
	
}
