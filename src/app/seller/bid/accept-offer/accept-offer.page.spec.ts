import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptOfferPage } from './accept-offer.page';

describe('AcceptOfferPage', () => {
  let component: AcceptOfferPage;
  let fixture: ComponentFixture<AcceptOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptOfferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
