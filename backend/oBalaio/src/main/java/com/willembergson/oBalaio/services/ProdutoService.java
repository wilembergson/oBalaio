package com.willembergson.oBalaio.services;

import com.willembergson.oBalaio.entity.Produto;
import com.willembergson.oBalaio.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {

    private final ProdutoRepository produtoRepository;

    @Autowired
    public ProdutoService(ProdutoRepository produtoRepository){
        this.produtoRepository = produtoRepository;
    }

    public Produto findById(Long id) throws Exception{
        Produto produto = produtoRepository.findById(id).orElseThrow(() -> new Exception());
        return produto;
    }
}
