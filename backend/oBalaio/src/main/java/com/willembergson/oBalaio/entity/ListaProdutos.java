package com.willembergson.oBalaio.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class ListaProdutos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    @OneToMany
    private List<Produto> produtos;

    @Column
    private Integer quantity;

    @Column
    private Double total;

    public ListaProdutos(List<Produto> produtos, Integer quantity, Double total) {
        this.produtos = produtos;
        this.quantity = quantity;
        this.total = total;
    }
}
