import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsPartnerPage } from './details-partner.page';

describe('DetailsPartnerPage', () => {
  let component: DetailsPartnerPage;
  let fixture: ComponentFixture<DetailsPartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
