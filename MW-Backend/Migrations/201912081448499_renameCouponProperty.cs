namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class renameCouponProperty : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Coupons");
            AddColumn("dbo.Coupons", "Label", c => c.String(nullable: false, maxLength: 128));
            AddPrimaryKey("dbo.Coupons", "Label");
            DropColumn("dbo.Coupons", "Libel");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Coupons", "Libel", c => c.String(nullable: false, maxLength: 128));
            DropPrimaryKey("dbo.Coupons");
            DropColumn("dbo.Coupons", "Label");
            AddPrimaryKey("dbo.Coupons", "Libel");
        }
    }
}
