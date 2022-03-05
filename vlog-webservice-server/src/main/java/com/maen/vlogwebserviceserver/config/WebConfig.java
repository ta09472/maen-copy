package com.maen.vlogwebserviceserver.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedHeaders("*")
<<<<<<< HEAD
                .allowedMethods("*")
                .exposedHeaders("ACCESS_TOKEN")
                .exposedHeaders("REFRESH_TOKEN");
=======
                .allowedMethods("*");
>>>>>>> b96d18dc8c0869d7ae652eb26b73f552c3ffe3a7
    }

}
