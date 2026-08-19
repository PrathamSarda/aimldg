package jar.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jar.service.Rservice;

@RestController
@RequestMapping("/api/v1")
public class Read {

    @Autowired
    Rservice obj;

    @GetMapping 

    public Map<Object, Object> read() {

        return obj.read();
    }
    
}
