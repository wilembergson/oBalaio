package com.willembergson.oBalaio.repository;

import com.willembergson.oBalaio.entity.ListaProdutos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListaProdutosRepository extends JpaRepository<ListaProdutos, Long> {
}
