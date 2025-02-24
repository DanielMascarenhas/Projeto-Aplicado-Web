package br.com.recycle.recycle.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "entradas")
public class Entrada {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "material_id", insertable = false, updatable = false)
    private Long materialId;

    @Column(nullable = false)
    private Float quantidade;

    @Column(nullable = false)
    private Float preco;

    @CreationTimestamp
    private LocalDateTime data;

    @ManyToOne
    @JoinColumn(name = "material_id")
    private Material material;

    @ManyToOne
    @JoinColumn(name = "material_id")
    private Estoque estoque;
}
