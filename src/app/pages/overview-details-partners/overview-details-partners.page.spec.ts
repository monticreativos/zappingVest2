import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverviewDetailsPartnersPage } from './overview-details-partners.page';

describe('OverviewDetailsPartnersPage', () => {
  let component: OverviewDetailsPartnersPage;
  let fixture: ComponentFixture<OverviewDetailsPartnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewDetailsPartnersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewDetailsPartnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
