package com.maen.vlogwebserviceserver.web;


<<<<<<< HEAD
import com.maen.vlogwebserviceserver.service.user.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
=======
import com.maen.vlogwebserviceserver.config.auth.JwtService;
import com.maen.vlogwebserviceserver.config.auth.dto.Jwt;
import com.maen.vlogwebserviceserver.service.user.LoginService;
import com.maen.vlogwebserviceserver.web.dto.LoginResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
>>>>>>> b96d18dc8c0869d7ae652eb26b73f552c3ffe3a7

@RequiredArgsConstructor
@Controller
public class LoginApiController {

    private final LoginService loginService;
<<<<<<< HEAD
=======
    private final JwtService tokenService;
>>>>>>> b96d18dc8c0869d7ae652eb26b73f552c3ffe3a7

    @GetMapping("/api/v1/login/{provider}")
    public String login(@PathVariable String provider) {
        StringBuilder uri = loginService.getAuthorizationCode(provider);
        return "redirect:"+uri;
    }

<<<<<<< HEAD
}
=======
    @GetMapping("/api/v1/jwt/{provider}")
    public ResponseEntity<LoginResponseDto> getToken(@PathVariable String provider, @RequestParam String code) {
        LoginResponseDto responseDto = loginService.login(provider, code);
        return ResponseEntity.ok().body(responseDto);
    }

    @GetMapping("/api/v1/jwt/expired")
    public String auth() {
        throw new RuntimeException();
    }

    @PostMapping("/api/v1/jwt/refresh")
    public Jwt refreshAuth(@RequestBody String refreshToken) {
        if (refreshToken != null && tokenService.verifyToken(refreshToken)) {
            String userId = tokenService.getPayload(refreshToken);
            Jwt newToken = tokenService.generateToken(userId);
            return newToken;
        }
        throw new RuntimeException();
    }
}
>>>>>>> b96d18dc8c0869d7ae652eb26b73f552c3ffe3a7
