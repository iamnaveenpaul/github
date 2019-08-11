import { fakeAsync, async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let products = [
    { "id": 1, "name": "one", "displayName": "One here" },
    { "id": 2, "name": "two", "displayName": "Two Here" },
  ];
  let productSelectElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.products = products;
    fixture.detectChanges();
  products = [
    { "id": 1, "name": "one", "displayName": "One here" },
    { "id": 2, "name": "two", "displayName": "Two Here" },
  ];
    productSelectElement = fixture.debugElement.query(By.css('#product'));

    console.log("Jimmy-----")
    console.log(productSelectElement)

    spyOn(component, 'onProductChanged').and.callThrough();

    expect(component.products).toEqual(products);
    expect(component.selectedProduct).toBeUndefined();
  }));

  it('should select a product', async(() => {

    fixture.detectChanges();
    productSelectElement.nativeElement.value = 1;
    productSelectElement.nativeElement.dispatchEvent(new Event('change'));

    expect(component.onProductChanged).toHaveBeenCalled();
    // expect(component.selectedProduct).toEqual({ "id": 1, "name": "product_name", "displayName": "Product Name" });
    expect(component.selectedProduct).toEqual({ "id": 1, "name": "one", "displayName": "One here" });

  }));
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

