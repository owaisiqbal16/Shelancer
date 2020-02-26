import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeOfferPage } from './make-offer.page';

describe('MakeOfferPage', () => {
  let component: MakeOfferPage;
  let fixture: ComponentFixture<MakeOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeOfferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
