package br.com.recycle.backend.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.recycle.backend.repository.UsuarioRepository;

@RestController
@RequestMapping("/api/usuario")
public class UserController {

    private final UsuarioRepository usuarioRepository;

    public UserController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
}