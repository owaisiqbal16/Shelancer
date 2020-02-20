import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerPage } from './seller.page';

describe('SellerPage', () => {
  let component: SellerPage;
  let fixture: ComponentFixture<SellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
