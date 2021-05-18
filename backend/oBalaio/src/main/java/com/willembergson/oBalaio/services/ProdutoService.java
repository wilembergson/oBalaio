package com.willembergson.oBalaio.services;

import com.willembergson.oBalaio.dto.ProdutoDTO;
import com.willembergson.oBalaio.entity.Produto;
import com.willembergson.oBalaio.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    private final ProdutoRepository produtoRepository;

    @Autowired
    public ProdutoService(ProdutoRepository produtoRepository){
        this.produtoRepository = produtoRepository;
    }

    public List<ProdutoDTO> findAll(){
        List<Produto> list = produtoRepository.findAll();
        return list.stream().map(x -> new ProdutoDTO(x)).collect(Collectors.toList());
    }

    public Produto findById(Long id) throws Exception{
        Produto produto = produtoRepository.findById(id).orElseThrow(() -> new Exception());
        return produto;
    }

    public void delete(Long id) throws  Exception{
        produtoRepository.findById(id).orElseThrow(() -> new Exception());
        produtoRepository.deleteById(id);
    }

    public void create(Produto produto){
        produtoRepository.save(produto);
    }
}
