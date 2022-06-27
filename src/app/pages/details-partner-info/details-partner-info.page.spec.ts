import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsPartnerInfoPage } from './details-partner-info.page';

describe('DetailsPartnerInfoPage', () => {
  let component: DetailsPartnerInfoPage;
  let fixture: ComponentFixture<DetailsPartnerInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPartnerInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPartnerInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
