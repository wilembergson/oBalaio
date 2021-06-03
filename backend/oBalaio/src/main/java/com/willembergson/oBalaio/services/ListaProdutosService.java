package com.willembergson.oBalaio.services;

import com.willembergson.oBalaio.dto.ProdutoDTO;
import com.willembergson.oBalaio.entity.ListaProdutos;
import com.willembergson.oBalaio.repository.ListaProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ListaProdutosService {

    private final ListaProdutosRepository repository;

    @Autowired
    public ListaProdutosService(ListaProdutosRepository repository){
        this.repository = repository;
    }

    public void create(ListaProdutos listaProdutos){
        repository.save(listaProdutos);
    }

    public List<ListaProdutos> findAll(){
        List<ListaProdutos> list = repository.findAll();
        return list.stream().map(x -> new ListaProdutos(x.getProdutos(), x.getQuantity(), x.getTotal())).collect(Collectors.toList());
    }
}
