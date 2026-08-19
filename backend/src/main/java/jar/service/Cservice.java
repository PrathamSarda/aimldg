package jar.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import jar.model.Student;
import jar.repo.StudentRepo;


@Service
public class Cservice {
    
        StudentRepo db;
        Cservice( StudentRepo db){
        this.db=db;
    }
        public Map<Object, Object> create(@RequestBody Student d) {
        Map<Object, Object> res = new HashMap<>();

        Student s = new Student();
        s.setName(d.getName());
        s.setEmail(d.getEmail());
        s.setIp(d.getIp());

        db.save(s);

        res.put("msg", "Student Added Successfully");
        res.put("status", 201);
        res.put("data", s);

        return res;
    }
}
