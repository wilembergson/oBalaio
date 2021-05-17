package com.willembergson.oBalaio.controller;

import com.willembergson.oBalaio.entity.Produto;
import com.willembergson.oBalaio.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    private ProdutoService produtoService;

    @Autowired
    public ProdutoController(ProdutoService produtoService){
        this.produtoService = produtoService;
    }


    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Produto findById(@PathVariable Long id) throws Exception{
        return produtoService.findById(id);
    }
}
