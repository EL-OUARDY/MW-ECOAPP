namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProductVarsAddValueCol : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Product_Variations", "Value", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Product_Variations", "Value");
        }
    }
}
