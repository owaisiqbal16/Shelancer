import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostRequestPage } from './post-request.page';

describe('PostRequestPage', () => {
  let component: PostRequestPage;
  let fixture: ComponentFixture<PostRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
