import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee: Employee = new Employee();
  // submitted = false;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router : Router){
    
  }
  ngOnInit() {
    // this.employee = new Employee;
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
     
      this.employee = data;
    }, 
    error => console.log(error)
    );
  }
   onSubmit() {
    // console.log(this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe (data =>{
      this.goToEmployeeList();
    }, error => console.log(error))
  }
  goToEmployeeList (){
    this.router.navigate(['/employees'])
  }
}





// updateEmployee(){
  //   this.employeeService.updateEmployee(this.employee, this.id).subscribe (data =>{
  //     console.log(data);
  //     this.employee = new Employee(); 
  //     this.goToEmployeeList ()
  //   },
  //   error => console.log(error))
  // }
 

  // goToEmployeeList (){
  //   this.router.navigate(['/employees'])
  // }