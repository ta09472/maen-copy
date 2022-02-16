package com.maen.vlogwebserviceserver.web;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
@Controller
public class LoginApiController {
    private final String ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
    private final String REDIRECT_URI = "http://localhost:3000";
    private final String RESPONSE_TYPE = "code";
    private final String SCOPE = "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";

    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String CLIENT_ID;

    @GetMapping("/api/v1/login")
    private String login() {
        return "redirect:" + ENDPOINT + "?client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI
                + "&response_type=" + RESPONSE_TYPE + "&scope=" + SCOPE;
    }

}
