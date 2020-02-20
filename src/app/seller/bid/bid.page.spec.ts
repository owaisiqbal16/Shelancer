import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BidPage } from './bid.page';

describe('BidPage', () => {
  let component: BidPage;
  let fixture: ComponentFixture<BidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
