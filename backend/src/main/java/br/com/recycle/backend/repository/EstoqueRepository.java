package br.com.recycle.backend.repository;

import br.com.recycle.backend.model.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EstoqueRepository extends JpaRepository<Estoque, Long> {
    List<Estoque> findAllByMaterial_UsuarioId(Long usuarioId);
    Optional<Estoque> findByMaterialIdAndMaterial_UsuarioId(Long materialId, Long usuarioId);
}
