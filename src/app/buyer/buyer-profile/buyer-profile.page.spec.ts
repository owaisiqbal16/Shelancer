import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyerProfilePage } from './buyer-profile.page';

describe('BuyerProfilePage', () => {
  let component: BuyerProfilePage;
  let fixture: ComponentFixture<BuyerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
