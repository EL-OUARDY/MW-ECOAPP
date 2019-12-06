namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeProductDateTypeToDateTimeOffsetAndName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Last_Update", c => c.DateTimeOffset(precision: 7));
            DropColumn("dbo.Products", "Last_Modification");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "Last_Modification", c => c.DateTimeOffset(precision: 7));
            DropColumn("dbo.Products", "Last_Update");
        }
    }
}
