package com.willembergson.oBalaio.controller;

import com.willembergson.oBalaio.dto.ProdutoDTO;
import com.willembergson.oBalaio.entity.Produto;
import com.willembergson.oBalaio.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    private ProdutoService produtoService;

    @Autowired
    public ProdutoController(ProdutoService produtoService){
        this.produtoService = produtoService;
    }

    @GetMapping
    public List<ProdutoDTO> findAll(){
        return produtoService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Produto findById(@PathVariable Long id) throws Exception{
        return produtoService.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) throws Exception {
        produtoService.delete(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createProduto(@RequestBody Produto produto){
        produtoService.create(produto);
    }

}
