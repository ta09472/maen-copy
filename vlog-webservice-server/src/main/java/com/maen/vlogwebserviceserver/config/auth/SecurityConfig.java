package com.maen.vlogwebserviceserver.config.auth;

import com.maen.vlogwebserviceserver.config.auth.filter.JwtAuthFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final JwtAuthFilter jwtAuthFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().disable()
                .formLogin().disable()
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .headers().frameOptions().disable()
                .and()
                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                    .authorizeRequests()
<<<<<<< HEAD
                        .antMatchers("/api/v1/**", "/css/**", "/images/**", "/js/**", "/h2-console/**").permitAll()
                        .antMatchers("/api/v2/**").authenticated()
=======
                        .antMatchers("/api/**", "/css/**", "/images/**", "/js/**", "/h2-console/**").permitAll()
>>>>>>> b96d18dc8c0869d7ae652eb26b73f552c3ffe3a7
                        .anyRequest().authenticated()
                .and()
                .addFilterBefore(
                        jwtAuthFilter,
                        UsernamePasswordAuthenticationFilter.class
                );
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOrigin("http://localhost:3000");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
<<<<<<< HEAD
        configuration.addExposedHeader("ACCESS_TOKEN");
        configuration.addExposedHeader("REFRESH_TOKEN");
=======
>>>>>>> b96d18dc8c0869d7ae652eb26b73f552c3ffe3a7
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
